package com.zhang.dubbo.remoteserver;

import com.zhang.dubbo.entity.UserInfo;
import com.zhang.dubbo.iface.IUserInfoServer;
import com.zhang.dubbo.service.UserInfoService;
import com.zhang.dubbo.utils.Slf4jLogUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName UserInfoServer
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 9:51
 * @Version 1.0
 **/
@Service
public class UserInfoServer implements IUserInfoServer {

    @Autowired
    private UserInfoService userInfoService;

    public UserInfo getUserInfo(String id) {
        Slf4jLogUtils.MSG.info("线程：" + Thread.currentThread().getName() + "处理开始");
        UserInfo userInfo = userInfoService.getUserInfo(id);
        Slf4jLogUtils.MSG.info("线程：" + Thread.currentThread().getName() + "处理完毕");
        return userInfo;
    }

    public void saveUserInfo(UserInfo userInfo) {
        userInfoService.saveUserInfo(userInfo);
    }
}
