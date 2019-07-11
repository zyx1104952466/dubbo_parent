package com.zhang.dubbo.remoteserver;

import com.zhang.dubbo.entity.UserInfo;
import com.zhang.dubbo.iface.IUserInfo;
import com.zhang.dubbo.service.UserInfoService;
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
public class UserInfoServer implements IUserInfo {

    @Autowired
    private UserInfoService userInfoService;

    public UserInfo getUserInfo(String id) {
        return userInfoService.getUserInfo(id);
    }

    public void saveUserInfo(UserInfo userInfo) {
        userInfoService.saveUserInfo(userInfo);
    }
}
