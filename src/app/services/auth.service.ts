import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;
  private token: string | null = null;
  private apiUrl = 'http://localhost:5000/api/auth'; // Updated URL with port

  constructor(private http: HttpClient) {}

  // Method to log in and store role and token
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        const user = response.data.user;
        this.userRole = user.role;
        this.token = response.data.token; // Extract the token
        localStorage.setItem('role', this.userRole || '');
        localStorage.setItem('token', this.token || '');
      })
    );
  }

  // Method to get the user role
  getRole(): string | null {
    if (!this.userRole) {
      this.userRole = localStorage.getItem('role');
    }
    return this.userRole;
  }

  // Method to check if the user has a specific role
  hasRole(role: string): boolean {
    return this.getRole() === role;
  }

  // Method to log out and clear role and token
  logout(): void {
    this.userRole = null;
    this.token = null;
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }

  // Optionally, a method to get the token if needed
  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }
}
