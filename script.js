basic.forever(function () {
    CutebotPro.trackbitStateValue()
    if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_12)) {
        CutebotPro.pwmCruiseControl(45, 0)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffff00)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_14)) {
        CutebotPro.pwmCruiseControl(40, 0)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_13)) {
        CutebotPro.pwmCruiseControl(35, 0)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x0000ff)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_8)) {
        CutebotPro.pwmCruiseControl(0, 45)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffff00)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_11)) {
        CutebotPro.pwmCruiseControl(0, 40)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_9)) {
        CutebotPro.pwmCruiseControl(0, 35)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x0000ff)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_3)) {
        CutebotPro.pwmCruiseControl(0, 25)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_2)) {
        CutebotPro.pwmCruiseControl(25, 0)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_0)) {
        CutebotPro.fullAstern()
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
    } else {
        CutebotPro.pwmCruiseControl(35, 35)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ff00)
    }
})
