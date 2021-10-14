import Joi from '@hapi/joi';
import { MethodParameters } from '@uniswap/v3-sdk';

export type TokenInRoute = {
  address: string;
  chainId: number;
  symbol: string;
  decimals: string;
};

export type PoolInRoute = {
  type: 'v3-pool';
  address: string;
  tokenIn: TokenInRoute;
  tokenOut: TokenInRoute;
  sqrtRatioX96: string;
  liquidity: string;
  tickCurrent: string;
  fee: string;
  amountIn?: string;
  amountOut?: string;
};

export const QuoteResponseSchemaJoi = Joi.object({
  quoteId: Joi.string().required(),
  amount: Joi.string().required(),
  amountDecimals: Joi.string().required(),
  quote: Joi.string().required(),
  quoteDecimals: Joi.string().required(),
  quoteGasAdjusted: Joi.string().required(),
  quoteGasAdjustedDecimals: Joi.string().required(),
  gasUseEstimateQuote: Joi.string().required(),
  gasUseEstimateQuoteDecimals: Joi.string().required(),
  gasUseEstimate: Joi.string().required(),
  gasUseEstimateUSD: Joi.string().required(),
  gasPriceWei: Joi.string().required(),
  blockNumber: Joi.string().required(),
  route: Joi.array().items(Joi.any()).required(),
  routeString: Joi.string().required(),
  methodParameters: Joi.object({
    calldata: Joi.string().required(),
    value: Joi.string().required(),
  }).optional(),
});

export type QuoteResponse = {
  quoteId: string;
  amount: string;
  amountDecimals: string;
  quote: string;
  quoteDecimals: string;
  quoteGasAdjusted: string;
  quoteGasAdjustedDecimals: string;
  gasUseEstimate: string;
  gasUseEstimateQuote: string;
  gasUseEstimateQuoteDecimals: string;
  gasUseEstimateUSD: string;
  gasPriceWei: string;
  blockNumber: string;
  route: Array<PoolInRoute[]>;
  routeString: string;
  methodParameters?: MethodParameters;
};