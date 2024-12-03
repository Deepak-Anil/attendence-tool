package com.attendance.repository;

import com.attendance.model.Attendance;
import com.attendance.model.Course;
import com.attendance.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    List<Attendance> findByStudent(User student);
    List<Attendance> findByCourse(Course course);
    List<Attendance> findByStudentAndCourse(User student, Course course);
} 