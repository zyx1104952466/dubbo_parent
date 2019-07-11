package com.zhang.dubbo;

import com.alibaba.dubbo.spring.boot.annotation.EnableDubboConfiguration;
import com.zhang.dubbo.utils.Slf4jLogUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @ClassName Main
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 17:20
 * @Version 1.0
 **/
@SpringBootApplication
@EnableDubboConfiguration
public class ConsumerApplication {

    public static void main(String[] args) {
        Slf4jLogUtils.MSG.info("启动开始");
        SpringApplication.run(ConsumerApplication.class, args);
        Slf4jLogUtils.MSG.info("启动完成");
    }
}
