package com.masterproject.magisterka.service;

import com.masterproject.magisterka.model.User;
import java.util.List;

public interface UserService {

    public User saveUser(User user);
    public List<User> getAllUsers();

}
