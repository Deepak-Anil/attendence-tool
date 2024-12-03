package com.attendance.controller;

import com.attendance.service.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/attendance")
@RequiredArgsConstructor
public class AttendanceController {
    private final AttendanceService attendanceService;
    
    @PostMapping("/mark/{courseId}")
    public ResponseEntity<?> markAttendance(
        @PathVariable Long courseId,
        @RequestBody Map<Long, Boolean> studentAttendance
    ) {
        attendanceService.markAttendance(courseId, studentAttendance);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/student/{studentId}")
    public ResponseEntity<?> getStudentAttendance(@PathVariable Long studentId) {
        return ResponseEntity.ok(attendanceService.getStudentAttendance(studentId));
    }
} 