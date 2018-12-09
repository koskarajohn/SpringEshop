package springeshop.util;

public final class Constants {

	public static final String AMAZON_S3_URL = "https://s3.eu-central-1.amazonaws.com/springeshop-bucket/";
	public static final String SMALL_PRODUCTS_PATH = "products/small/";
	public static final String LARGE_PRODUCTS_PATH = "products/large/";
	public static final String VERY_SMALL_PRODUCTS_PATH = "products/very-small/";
	
	public static final double[] PRICE_RANGE_ZERO_TO_TEN = { 0.0 ,9.99};
	public static final double[] PRICE_RANGE_TEN_TO_TWENTY = { 10.0 ,19.99};
	public static final double[] PRICE_RANGE_TWENTY_TO_THIRTY = { 20.0 ,29.99};
	public static final double[] PRICE_RANGE_THIRTY_TO_FIFTY = { 30.0 ,50.0};
	
	private Constants(){
		
	}
}
