package com.server.comeStatistics;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ComeController {
    private final ComeRepository comeRepository;

    public ComeController(ComeRepository comeRepository) {
        this.comeRepository = comeRepository;
    }

    @GetMapping("/come")
    public List<Come> getCome() {
        return (List<Come>) comeRepository.findAll();
    }
}
