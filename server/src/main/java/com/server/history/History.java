package com.server.history;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String place;
    private char come;
    private double amount;

    public History() {
        this.name = "";
        this.place = "";
        this.come = ' ';
        this.amount = 0;
    }

    public History(String name, String place, char come, double amount) {
        this.name = name;
        this.place = place;
        this.come = come;
        this.amount = amount;
    }

    public void setCome(char come) {
        this.come = come;
    }

    public char getCome() {
        return this.come;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPlace() {
        return place;
    }

    public double getAmount() {
        return amount;
    }

    @Override
    public String toString() {
        return "History{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", place='" + place + '\'' +
                ", amount=" + amount +
                '}';
    }
}
