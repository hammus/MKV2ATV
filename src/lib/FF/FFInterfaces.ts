export interface IProcessOptions {
    input: string;
    process?: string;
    output?: string;
}

export interface IFileInfo {
    videoInfo: IStreamInfo;
    audioInfo: IStreamInfo;
}

export interface IGPUInfo {
    Manufacturer: string;
    Model: string;
    Device: string;
    FullName: string;
}

export interface IGPUOutput {
    "AcceleratorCapabilities": string;
    "AdapterCompatibility": string;
    "AdapterDACType": string;
    "AdapterRAM": string;
    "Availability": string;
    "CapabilityDescriptions": string;
    "Caption": string;
    "ColorTableEntries": string;
    "ConfigManagerErrorCode": string;
    "ConfigManagerUserConfig": string;
    "CreationClassName": string;
    "CurrentBitsPerPixel": string;
    "CurrentHorizontalResolution": string;
    "CurrentNumberOfColors": string;
    "CurrentNumberOfColumns": string;
    "CurrentNumberOfRows": string;
    "CurrentRefreshRate": string;
    "CurrentScanMode": string;
    "CurrentVerticalResolution": string;
    "Description": string;
    "DeviceID": string;
    "DeviceSpecificPens": string;
    "DitherType": string;
    "DriverDate": string;
    "DriverVersion": string;
    "ErrorCleared": string;
    "ErrorDescription": string;
    "ICMIntent": string;
    "ICMMethod": string;
    "InfFilename": string;
    "InfSection": string;
    "InstallDate": string;
    "InstalledDisplayDrivers": string;
    "LastErrorCode": string;
    "MaxMemorySupported": string;
    "MaxNumberControlled": string;
    "MaxRefreshRate": string;
    "MinRefreshRate": string;
    "Monochrome": string;
    "Name": string;
    "NumberOfColorPlanes": string;
    "NumberOfVideoPages": string;
    "PNPDeviceID": string;
    "PowerManagementCapabilities": string;
    "PowerManagementSupported": string;
    "ProtocolSupported": string;
    "ReservedSystemPaletteEntries": string;
    "SpecificationVersion": string;
    "Status": string;
    "StatusInfo": string;
    "SystemCreationClassName": string;
    "SystemName": string;
    "SystemPaletteEntries": string;
    "TimeOfLastReset": string;
    "VideoArchitecture": string;
    "VideoMemoryType": string;
    "VideoMode": string;
    "VideoModeDescription": string;
    "VideoProcessor": string;
}

export interface IFFProbeStreamData {
    index: number;
    codec_name: string;
    codec_long_name: string;
    codec_type: string;
    codec_time_base: string;
    codec_tag_string?: string;
    codec_tag?: string;
    sample_fmt?: string;
    sample_rate?: string;
    bits_per_sample: number;
    channels?: number;
    channel_layout?: string;
    profile?: string;
    width?: number;
    height?: number;
    coded_width?: number;
    coded_height?: number;
    has_b_frames?: number;
    sample_aspect_ratio?: string;
    display_aspect_ratio?: string;
    pix_fmt?: string;
    level?: number;
    color_range?: string;
    color_space?: string ;
    color_transfer?: string;
    color_primaries?: string;
    chroma_location?: string;
    refs?: number;
    is_avc?: number;
    nal_length_size?: number;
    r_frame_rate?: string;
    avg_frame_rate?: string;
    time_base?: string;
    start_pts?: number;
    start_time?: string;
    duration_ts?: number;
    duration?: string;
    bit_rate?: string;
    bits_per_raw_sample?: string;
    nb_frames?: string;
    disposition?: IFFProbeDisposition;
    tags?: IFFProbeStreamTags;

}

export interface IFFProbeStreamTags {
    creation_time?: string;
    language?: string;
    encoder?: string;
}

export interface IFFProbeFormat {
    filename?: string;
    nb_streams?: number;
    nb_programs?: number;
    format_name?: string;
    format_long_name?: string;
    start_time?: string;
    duration?: string;
    size?: string;
    bit_rate?: string;
    probe_score?: number;
    tags?: IFFProbeFormatTags;
}

export interface IFFProbeFormatTags {
    major_brand?: string;
    minor_version?: string;
    compatible_brands?: string;
    creation_time?: string;
    encoder?: string;
}

export interface IFFProbeDisposition {
    "default"?: number;
    dub?: number;
    original?: number;
    comment?: number;
    lyrics?: number;
    karaoke?: number;
    forced?: number;
    hearing_impaired?: number;
    visual_impaired?: number;
    clean_effects?: number;
    attached_pic?: number;
}

export interface IFFProbeOutput {
    streams: IFFProbeStreamData[];
    format: IFFProbeFormat;
}

export type IFFProbeOutputHandler = (result: IFFProbeOutput) => void;

export type IFFmpegOutputHandler = (progress: IFFMpegProgress) => void;

export interface IStreamInfo {
    codec_name: string;
    duration?: number;
    size?: number;
}

export type IProgramManagerCallback = (result: string | IFFProbeOutput) => void;

export interface IFFMpegProgress {
    frame?: number;
    fps?: number;
    q?: number;
    size?: number;
    time?: string;
    bitrate?: string;
    speed?: string;
}
