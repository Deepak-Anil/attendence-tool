package com.attendance.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String fullName;
    private String email;
    private String username;
    private String password;
    private String role;
} 