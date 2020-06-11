package com.zhang.dubbo.mapper;

import com.zhang.dubbo.entity.UserInfo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("userInfoMapper")
public interface IUserInfoMapper {
    public int countAll();
    public UserInfo selectByPrimaryKey(Integer id);
    public void insert(UserInfo userInfo);
    public void insertSelective(UserInfo userInfo);
    public List<UserInfo> getAllUserInfo();
    public void deleteByPrimaryKey(Integer id);
    public void updateUserInfo(UserInfo userInfo);
    public void updateByPrimaryKey(UserInfo userInfo);
    public void updateByPrimaryKeySelective(UserInfo userInfo);
}
