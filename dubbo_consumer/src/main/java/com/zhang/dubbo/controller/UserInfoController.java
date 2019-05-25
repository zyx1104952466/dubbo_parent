package com.zhang.dubbo.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.zhang.dubbo.action.UserInfoAction;
import com.zhang.dubbo.bean.UserInfoBean;
import com.zhang.dubbo.iface.IUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @ClassName UserInfoController
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 17:22
 * @Version 1.0
 **/
@RestController
public class UserInfoController {

    @Reference(version = "1.0.0")
    IUserInfo userInfo;

    @RequestMapping(value = "getUserInfo")
    public String getUserInfo() {
        return userInfo.getUserInfo();
    }

    @RequestMapping(value = "saveUserInfo")
    public void saveUserInfo(UserInfoBean bean) {
        userInfo.saveUserInfo(bean);
    }
}
