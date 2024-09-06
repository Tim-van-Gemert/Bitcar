basic.forever(function () {
    CutebotPro.trackbitStateValue()
    if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_12)) {
        CutebotPro.pwmCruiseControl(100, 0)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_2) || CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_14)) {
        CutebotPro.pwmCruiseControl(70, 0)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_8)) {
        CutebotPro.pwmCruiseControl(0, 100)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_3) || CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_11)) {
        CutebotPro.pwmCruiseControl(0, 70)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_1)) {
        CutebotPro.pwmCruiseControl(40, 40)
    }
})
