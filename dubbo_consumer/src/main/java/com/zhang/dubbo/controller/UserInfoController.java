package com.zhang.dubbo.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.zhang.dubbo.entity.UserInfo;
import com.zhang.dubbo.iface.IUserInfo;
import com.zhang.dubbo.utils.Slf4jLogUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * @ClassName UserInfoController
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 17:22
 * @Version 1.0
 **/
@RestController
public class UserInfoController {

    private static AtomicInteger acount = new AtomicInteger(0);

    @Reference
    IUserInfo userInfo;

    @RequestMapping(value = "getUserInfo")
    public UserInfo getUserInfo(String id) {
        Slf4jLogUtils.MSG.info("线程：" + Thread.currentThread().getName() + "处理开始");
        UserInfo bean = userInfo.getUserInfo(id);
        Slf4jLogUtils.MSG.info("线程：" + Thread.currentThread().getName() + "处理结束");
        return  bean;
    }

    @RequestMapping(value = "saveUserInfo")
    public void saveUserInfo(UserInfo bean) {
        Slf4jLogUtils.MSG.info("当前请求：" + Thread.currentThread().getName());
        userInfo.saveUserInfo(bean);
    }
}
