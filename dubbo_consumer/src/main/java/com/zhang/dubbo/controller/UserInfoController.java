package com.zhang.dubbo.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.fastjson.JSON;
import com.zhang.dubbo.entity.UserInfo;
import com.zhang.dubbo.iface.IUserInfoServer;
import com.zhang.dubbo.utils.Slf4jLogUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Timestamp;
import java.util.Date;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @ClassName UserInfoController
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 17:22
 * @Version 1.0
 **/
@RestController
@RequestMapping("/userInfo")
public class UserInfoController {

    @Reference(check = false)
    IUserInfoServer userInfoServer;

    @RequestMapping(value = "get")
    public UserInfo get(Integer id) {
        Slf4jLogUtils.MSG.info("线程：" + Thread.currentThread().getName() + "处理开始");
        UserInfo bean = userInfoServer.getUserInfo(id);
        Slf4jLogUtils.MSG.info("线程：" + Thread.currentThread().getName() + "处理结束");
        return  bean;
    }

    @RequestMapping(value = "save")
    public void save(@RequestBody UserInfo userInfo) {
        Slf4jLogUtils.MSG.info("当前请求：" + Thread.currentThread().getName());
        Slf4jLogUtils.MSG.info(JSON.toJSONString(userInfo));
        userInfo.setCreateTime(new Timestamp(new Date().getTime()));
        userInfoServer.saveUserInfo(userInfo);
    }

    @RequestMapping(value = "update")
    public void update(@RequestBody UserInfo userInfo) {
        Slf4jLogUtils.MSG.info("当前请求：" + Thread.currentThread().getName());
        Slf4jLogUtils.MSG.info(JSON.toJSONString(userInfo));
        userInfo.setUpdateTime(new Timestamp(new Date().getTime()));
    }
}
