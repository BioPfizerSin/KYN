package com.project.kyn.service;

import java.util.List;

import com.project.kyn.entities.Users;

public interface UserService {
	public Users addUser(Users users);
	public Users login(Users users);
	public List<Users> getUsers();
}
