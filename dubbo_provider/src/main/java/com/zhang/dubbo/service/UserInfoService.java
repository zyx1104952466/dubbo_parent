package com.zhang.dubbo.service;

import com.alibaba.fastjson.JSON;
import com.zhang.dubbo.dao.IUserInfoDao;
import com.zhang.dubbo.entity.UserInfo;
import com.zhang.dubbo.utils.Slf4jLogUtils;
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
    IUserInfoDao userInfoDao;

    public UserInfo selectByPrimaryKey(Integer id) {
        return userInfoDao.selectByPrimaryKey(id);
    }

    public void insert(UserInfo userInfo) {
        Slf4jLogUtils.MSG.info(JSON.toJSONString(userInfo));
        userInfoDao.insert(userInfo);
    }
}
