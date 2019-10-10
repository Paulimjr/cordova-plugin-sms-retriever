package com.outsystems.smsretriever;

/**
 * Created on : Oct 10, 2019 Author : Paulo Camilo
 */
public interface OtpReceivedInterface<String> {
  void onOtpReceived(String code);
  void onOtpTimeout();
}
