import { Col as AntdCol } from "antd";
import React, { PropsWithChildren } from "react";

type ColSpanType = number | string;

type ColType = PropsWithChildren & {
	xs?: ColSpanType;
	sm?: ColSpanType;
	md?: ColSpanType;
	lg?: ColSpanType;
	xl?: ColSpanType;
	xxl?: ColSpanType;
	className?: string;
	style?: React.CSSProperties;
	span?: number;
};

const Col = ({
	xs = 24,
	sm = 12,
	md = 12,
	lg = 12,
	xl = 8,
	xxl = 6,
	className,
	style,
	span,
	children,
}: ColType) => {
	return (
		<AntdCol xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className={className} style={style} span={span}>
			{children}
		</AntdCol>
	);
};

export default Col;
