package com.masterproject.magisterka.service;

import com.masterproject.magisterka.model.User;
import com.masterproject.magisterka.repository.UserRepository;
import com.masterproject.magisterka.service.exceptions.NicknameAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user) {
        // Sprawdź, czy podany nickname jest unikalny
        if (userRepository.existsByNickname(user.getNickname())) {
            throw new NicknameAlreadyExistsException("Nickname already exists: " + user.getNickname());
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Zapisz użytkownika w bazie danych
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}