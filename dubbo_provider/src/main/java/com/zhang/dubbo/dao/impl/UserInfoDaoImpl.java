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

    public UserInfo selectByPrimaryKey(Integer id) {
        return userInfoMapper.selectByPrimaryKey(id);
    }

    public void insert(UserInfo userInfo) {
        userInfoMapper.insert(userInfo);
    }

    public List<UserInfo> getAllUserInfo() {
        return userInfoMapper.getAllUserInfo();
    }

    public void deleteByPrimaryKey(Integer id) {
        userInfoMapper.deleteByPrimaryKey(id);
    }

    public void updateUserInfo(UserInfo userInfo) {
        userInfoMapper.updateUserInfo(userInfo);
    }
}
