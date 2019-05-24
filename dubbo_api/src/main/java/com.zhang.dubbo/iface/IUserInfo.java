package com.zhang.dubbo.iface;

import com.zhang.dubbo.bean.UserInfoBean;

/**
 * @ClassName IUserInfo
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 9:32
 * @Version 1.0
 **/
public interface IUserInfo {

    public String getUserInfo();

    public void saveUserInfo(UserInfoBean bean);
}
