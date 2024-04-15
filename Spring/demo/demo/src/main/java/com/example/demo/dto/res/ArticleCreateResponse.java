package com.example.demo.dto.res;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ArticleCreateResponse {
    private int code;
    private String msg;

    public ArticleCreateResponse(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public static final int SUCCESS_CODE = 200;
    public static final String SUCCESS_MSG = "게시글 저장 성공";
    public static final int FAILURE_CODE = 500;
    public static final String FAILURE_MSG = "서버 에러";
}
