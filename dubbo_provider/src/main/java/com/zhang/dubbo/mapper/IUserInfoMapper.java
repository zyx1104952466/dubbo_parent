package com.zhang.dubbo.mapper;

import com.zhang.dubbo.entity.UserInfo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("userInfoMapper")
public interface IUserInfoMapper {
    public int countAll();
    public UserInfo getById(String id);
    public void insertUserInfo(UserInfo userInfo);
    public List<UserInfo> getAllUserInfo();
    public void deleteUserInfo(String id);
    public void updateUserInfo(Map<String,Object> map);
}
