package com.server.balanceStatistics;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Arrays;

@Entity
public class Balance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private double[] balance;

    public Balance() {
        this.balance = new double[]{ };
    }

    public Balance(double[] balance) {
        this.balance = balance;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double[] getBalance() {
        return balance;
    }

    public void setBalance(double[] balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Balance{" +
                "id=" + id +
                ", balance=" + Arrays.toString(balance) +
                '}';
    }
}
