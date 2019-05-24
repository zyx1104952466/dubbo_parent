package com;

import com.zhang.dubbo.action.UserInfoAction;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;

/**
 * @ClassName UserInfoActionTest
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 11:35
 * @Version 1.0
 **/
public class UserInfoActionTest {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String("control-core.xml"));
        UserInfoAction userInfoAction = context.getBean(UserInfoAction.class);
        System.out.println(userInfoAction.getUserInfo());
        try {
            System.in.read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
