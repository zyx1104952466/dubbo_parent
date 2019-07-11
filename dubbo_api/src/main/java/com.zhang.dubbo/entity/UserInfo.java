package com.zhang.dubbo.entity;

import java.io.Serializable;

/**
 * @ClassName UserInfoBean
 * @Description TODO
 * @Author zhangyux
 * @Date 2019/5/24 9:59
 * @Version 1.0
 **/
public class UserInfo implements Serializable {

    String id;
    String name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "UserInfoBean{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
