/*
Navicat MySQL Data Transfer

Source Server         : zdcccc
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : studb

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2016-07-11 10:46:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_admin
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员ID',
  `NAME` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `STATUS` int(2) NOT NULL DEFAULT '1',
  `CREATE_TIME` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_admin
-- ----------------------------
INSERT INTO `t_admin` VALUES ('1', 'admin', 'admin', '1', '2016-07-09 17:03:14');

-- ----------------------------
-- Table structure for t_cet4_6
-- ----------------------------
DROP TABLE IF EXISTS `t_cet4_6`;
CREATE TABLE `t_cet4_6` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '四六级成绩ID',
  `STUID` int(11) NOT NULL COMMENT '学生ID 对应stu表ID',
  `WJM` varchar(255) NOT NULL,
  `TL` int(5) NOT NULL COMMENT '听力成绩',
  `YD` int(5) NOT NULL COMMENT '阅读成绩',
  `XZ` int(5) NOT NULL COMMENT '写作和翻译',
  `ZCJ` int(5) NOT NULL COMMENT '总成绩',
  `CREATE_TIME` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `STATUS` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='2、四六级基本信息表';

-- ----------------------------
-- Records of t_cet4_6
-- ----------------------------

-- ----------------------------
-- Table structure for t_stu
-- ----------------------------
DROP TABLE IF EXISTS `t_stu`;
CREATE TABLE `t_stu` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '学生ID',
  `NAME` varchar(255) NOT NULL COMMENT '用户名（用于登录）',
  `XM` varchar(255) NOT NULL COMMENT '姓名',
  `XB` varchar(255) NOT NULL COMMENT '性别 1：男 2：女 3：保密',
  `XL` varchar(255) NOT NULL COMMENT '学历',
  `XSLB` varchar(255) NOT NULL COMMENT '学生类别	1：应届生；2：毕业生',
  `SFZH` varchar(255) NOT NULL COMMENT '身份证号',
  `PASSWORD` varchar(255) NOT NULL,
  `STATUS` varchar(2) NOT NULL DEFAULT '1',
  `CREATE_TIME` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='学生信息表';

-- ----------------------------
-- Records of t_stu
-- ----------------------------
INSERT INTO `t_stu` VALUES ('1', '1', '1', '1', '1', '1', '1', '1', '1', '2016-07-09 17:07:33');

-- ----------------------------
-- Table structure for t_word
-- ----------------------------
DROP TABLE IF EXISTS `t_word`;
CREATE TABLE `t_word` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '档案查询记录ID',
  `WJMID` int(11) NOT NULL COMMENT '文件ID',
  `WTIME` datetime NOT NULL,
  `FTIME` datetime NOT NULL,
  `CL` varchar(255) DEFAULT NULL,
  `CL_TIME` datetime DEFAULT NULL,
  `XMID` int(11) NOT NULL,
  `BZ` varchar(255) DEFAULT NULL,
  `STATUS` int(255) NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_word
-- ----------------------------
