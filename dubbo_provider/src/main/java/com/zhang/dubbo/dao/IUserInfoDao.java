package com.zhang.dubbo.dao;

import com.zhang.dubbo.entity.UserInfo;

import java.util.List;
import java.util.Map;

/**
 * @ClassName UserInfoDao
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 10:23
 * @Version 1.0
 **/
public interface IUserInfoDao{
    public int countAll();
    public UserInfo getById(String id);
    public void insertUserInfo(UserInfo userInfo);
    public List<UserInfo> getAllUserInfo();
    public void deleteUserInfo(String id);
    public void updateUserInfo(Map<String,Object> map);
}
