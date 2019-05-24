package com.zhang.dubbo.remoteserver;

import com.zhang.dubbo.bean.UserInfoBean;
import com.zhang.dubbo.iface.IUserInfo;
import com.zhang.dubbo.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @ClassName UserInfoServer
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 9:51
 * @Version 1.0
 **/
public class UserInfoServer implements IUserInfo {

    @Autowired
    private UserInfoService userInfoService;

    public String getUserInfo() {
        return userInfoService.getUserInfo();
    }

    public void saveUserInfo(UserInfoBean bean) {
        userInfoService.saveUserInfo();
    }
}
