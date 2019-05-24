package com.zhang.dubbo.service;

import com.zhang.dubbo.dao.UserInfoDao;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @ClassName UserInfoService
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 9:51
 * @Version 1.0
 **/
public class UserInfoService {

    @Autowired
    UserInfoDao userInfoDao;

    public String getUserInfo() {
        return userInfoDao.getUserInfo();
    }

    public void saveUserInfo() {
        userInfoDao.saveUserInfo();
    }
}
