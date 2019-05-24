package com.zhang.dubbo.dao;

/**
 * @ClassName UserInfoDao
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 10:23
 * @Version 1.0
 **/
public class UserInfoDao {

    public void saveUserInfo() {
        System.out.println("插入成功");
    }

    public String getUserInfo() {
        return "Helloworld";
    }
}
