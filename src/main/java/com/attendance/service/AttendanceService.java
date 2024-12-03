package com.attendance.service;

import com.attendance.model.Attendance;
import com.attendance.model.Course;
import com.attendance.model.User;
import com.attendance.repository.AttendanceRepository;
import com.attendance.repository.CourseRepository;
import com.attendance.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AttendanceService {
    private final AttendanceRepository attendanceRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    
    public void markAttendance(Long courseId, Map<Long, Boolean> studentAttendance) {
        Course course = courseRepository.findById(courseId)
            .orElseThrow(() -> new RuntimeException("Course not found"));
            
        LocalDate today = LocalDate.now();
        
        studentAttendance.forEach((studentId, present) -> {
            User student = userRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));
                
            Attendance attendance = new Attendance();
            attendance.setStudent(student);
            attendance.setCourse(course);
            attendance.setDate(today);
            attendance.setPresent(present);
            
            attendanceRepository.save(attendance);
        });
    }
    
    public List<Attendance> getStudentAttendance(Long studentId) {
        User student = userRepository.findById(studentId)
            .orElseThrow(() -> new RuntimeException("Student not found"));
        return attendanceRepository.findByStudent(student);
    }
} 