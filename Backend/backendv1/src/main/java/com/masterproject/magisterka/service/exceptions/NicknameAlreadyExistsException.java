package com.masterproject.magisterka.service.exceptions;

public class NicknameAlreadyExistsException extends RuntimeException {

    public NicknameAlreadyExistsException(String message) {
        super(message);
    }
}
