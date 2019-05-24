package com.zhang.dubbo.action;

import com.zhang.dubbo.bean.UserInfoBean;
import com.zhang.dubbo.iface.IUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @ClassName UserInfoAction
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 9:58
 * @Version 1.0
 **/
@Component
public class UserInfoAction{

    @Autowired
    IUserInfo userInfo;

    public String getUserInfo() {
        return userInfo.getUserInfo();
    }

    public void saveUserInfo(UserInfoBean bean) {
        userInfo.saveUserInfo(bean);
    }
}
