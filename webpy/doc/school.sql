/*
Navicat MySQL Data Transfer

Source Server         : ztc
Source Server Version : 50537
Source Host           : localhost:3306
Source Database       : school

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2016-06-21 22:10:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_file
-- ----------------------------
DROP TABLE IF EXISTS `t_file`;
CREATE TABLE `t_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '递增ID',
  `filename` varchar(100) NOT NULL COMMENT '文件名称',
  `exist_status` int(2) NOT NULL COMMENT '是否存在 1：存在 0 ：不存在',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_file
-- ----------------------------

-- ----------------------------
-- Table structure for t_search_record
-- ----------------------------
DROP TABLE IF EXISTS `t_search_record`;
CREATE TABLE `t_search_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '递增ID',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `file_id` int(11) NOT NULL COMMENT '文件ID',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_search_record
-- ----------------------------

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，递增ID',
  `card_num` varchar(18) NOT NULL COMMENT '身份证',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `phone_num` int(11) NOT NULL COMMENT '手机号',
  `kind` int(2) NOT NULL COMMENT '用户类型1：学生 2：管理员',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', '11', '11', '222', '1', '2016-06-21 21:37:30', '2016-06-21 21:37:33');
