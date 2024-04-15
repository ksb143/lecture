package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "article")
@Data
@NoArgsConstructor
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer articleId;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false, length = 65535, columnDefinition = "TEXT")
    private String content;
}
