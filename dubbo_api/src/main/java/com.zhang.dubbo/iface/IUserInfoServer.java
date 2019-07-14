package com.zhang.dubbo.iface;

import com.zhang.dubbo.entity.UserInfo;

/**
 * @ClassName IUserInfo
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 9:32
 * @Version 1.0
 **/
public interface IUserInfoServer {

    public UserInfo getUserInfo(String id);

    public void saveUserInfo(UserInfo userInfo);
}
