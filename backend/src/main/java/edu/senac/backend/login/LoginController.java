package edu.senac.backend.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private LoginRepository repository;

    @PostMapping
    @Transactional
    public void validarUsuario(@RequestBody DadosParaLogin login) {
        repository.save(new Login(login));
    }
}