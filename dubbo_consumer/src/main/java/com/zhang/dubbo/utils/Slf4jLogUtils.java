package com.zhang.dubbo.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Slf4jLogUtils {
	
	/**
	 * 记录系统运行日志，监控系统运行情况
	 */
    public static final Logger MONITOR = LoggerFactory.getLogger("monitor");
	
	/**
	 * 记录业务日志
	 */
    public static final Logger APP = LoggerFactory.getLogger("app");
    
    /**
     * 记录报文日志
     */
    public static final Logger MSG = LoggerFactory.getLogger("msg");
    
    /**
     * 记录系统错误，监控程序是否出错
     */
    public static final Logger ERROR = LoggerFactory.getLogger("error");
}
