package com.zhang.dubbo.dao.impl;

import com.zhang.dubbo.dao.IUserInfoDao;
import com.zhang.dubbo.entity.UserInfo;
import com.zhang.dubbo.mapper.IUserInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @ClassName UserInfoDaoImpl
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/7/11 10:14
 * @Version 1.0
 **/
@Service("userInfoDao")
public class UserInfoDaoImpl implements IUserInfoDao {

    @Autowired
    IUserInfoMapper userInfoMapper;

    public int countAll() {
        return userInfoMapper.countAll();
    }

    public UserInfo getById(String id) {
        return userInfoMapper.getById(id);
    }

    public void insertUserInfo(UserInfo userInfo) {
        userInfoMapper.insertUserInfo(userInfo);
    }

    public List<UserInfo> getAllUserInfo() {
        return userInfoMapper.getAllUserInfo();
    }

    public void deleteUserInfo(String id) {
        userInfoMapper.deleteUserInfo(id);
    }

    public void updateUserInfo(Map<String, Object> map) {
        userInfoMapper.updateUserInfo(map);
    }
}
