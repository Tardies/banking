package com.server;

import com.server.account.Account;
import com.server.account.AccountRepository;
import com.server.balanceStatistics.Balance;
import com.server.balanceStatistics.BalanceRepository;
import com.server.comeStatistics.Come;
import com.server.comeStatistics.ComeRepository;
import com.server.history.History;
import com.server.history.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Stream;

@SpringBootApplication
@RestController
public class ServerApplication {

    private AccountRepository accountRepository;
    private HistoryRepository historyRepository;
    private BalanceRepository balanceRepository;
    private ComeRepository comeRepository;

    @RequestMapping("/resource")
    public Map<String,Object> home() {
        Map<String,Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello World");
        return model;
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @Bean
    CommandLineRunner initAccount(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
        return args -> {
            Stream.of("Isaac Newton").forEach(name -> {
                Account account = new Account(name, 1488.99);
                accountRepository.save(account);
            });
            accountRepository.findAll().forEach(System.out::println);
        };
    }


    @Bean
    CommandLineRunner initHistory(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
        return args -> {
            Stream.of(
                    new History("Cafe", "al. Piłsudskiego", '-',14),
                    new History("Electonics Shop", "ul. Majowa", '-',  88),
                    new History("ATM", "ul. Marcowa", '+', 200)
            ).forEach(history -> historyRepository.save(history));
            historyRepository.findAll().forEach(System.out::println);
        };
    }

    @Bean
    CommandLineRunner initBalance(BalanceRepository balanceRepository) {
        this.balanceRepository = balanceRepository;
        return args -> {
          Stream.of(
                  new Balance(new double[]{1200, 1500, 2000, 700, 900, 1240, 1488})
          ).forEach(balance -> balanceRepository.save(balance));
          balanceRepository.findAll().forEach(System.out::println);
        };
    }

    @Bean
    CommandLineRunner initCome(ComeRepository comeRepository) {
        this.comeRepository = comeRepository;
        return args -> {
            Stream.of(
                    new Come(new double[] {1200, 300, 500, -1300, 300, 340, 248})
            ).forEach(come -> comeRepository.save(come));
            comeRepository.findAll().forEach(System.out::println);
        };
    }



    @Autowired
    public void setAccountRepository(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Autowired
    public void setHistoryRepository(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    @Autowired
    public void setBalanceRepository(BalanceRepository balanceRepository) {
        this.balanceRepository = balanceRepository;
    }

    @Autowired
    public void setComeRepository(ComeRepository comeRepository) {
        this.comeRepository = comeRepository;
    }
}
