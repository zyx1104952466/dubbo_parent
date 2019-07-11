package com;

import com.zhang.dubbo.controller.UserInfoController;
import com.zhang.dubbo.entity.UserInfo;
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
        UserInfoController userInfoController = context.getBean(UserInfoController.class);
        UserInfo userInfo = new UserInfo();
        userInfo.setId("1");
        userInfo.setName("zhangyux");
        userInfoController.saveUserInfo(userInfo);
        try {
            System.in.read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
