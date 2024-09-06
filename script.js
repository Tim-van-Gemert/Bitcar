basic.forever(function () {
    CutebotPro.trackbitStateValue()
    if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_12)) {
        CutebotPro.pwmCruiseControl(45, 0)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_14)) {
        CutebotPro.pwmCruiseControl(40, 0)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_13)) {
        CutebotPro.pwmCruiseControl(35, 0)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_8)) {
        CutebotPro.pwmCruiseControl(0, 45)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_11)) {
        CutebotPro.pwmCruiseControl(0, 40)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_9)) {
        CutebotPro.pwmCruiseControl(0, 35)
    } else {
        CutebotPro.pwmCruiseControl(40, 40)
    }
})
