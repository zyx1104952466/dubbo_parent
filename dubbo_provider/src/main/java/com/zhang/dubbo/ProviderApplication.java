package com.zhang.dubbo;

import com.zhang.dubbo.utils.Slf4jLogUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;

/**
 * @ClassName Main
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 10:33
 * @Version 1.0
 **/
public class ProviderApplication {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String("control-core.xml"));
        context.start();
        Slf4jLogUtils.MSG.info("Provider started");
        try {
            System.in.read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
