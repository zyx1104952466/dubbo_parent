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

    /**
     * 统计总笔数
     * @return
     */
    public int countAll();

    /**
     * 根据主键获取对象
     * @param id
     * @return
     */
    public UserInfo selectByPrimaryKey(Integer id);

    /**
     * 插入单条数据
     * @param userInfo
     */
    public void insert(UserInfo userInfo);

    /**
     * 获取所有明细
     * @return
     */
    public List<UserInfo> getAllUserInfo();

    /**
     * 根据主键删除明细
     * @param id
     */
    public void deleteByPrimaryKey(Integer id);

    /**
     * 更新明细
     * @param userInfo
     */
    public void updateUserInfo(UserInfo userInfo);
}
