import IHTTPProvider from 'shared/container/providers/HTTPProvider/models/IHTTPProvider';
import Http from 'config/http';
import RequestError from 'shared/errors/entities/RequestError';

export default class AxiosHTTPProvider implements IHTTPProvider {
  public addHeader: IHTTPProvider['addHeader'] = (key, value) => {
    Http.instance.defaults.headers[key] = value;
  };

  public removeHeader: IHTTPProvider['removeHeader'] = key => {
    delete Http.instance.defaults.headers[key];
  };

  public delete: IHTTPProvider['delete'] = async (path, config) => {
    try {
      const response = await Http.instance.delete(path, config);
      return response.data;
    } catch (error) {
      throw new RequestError(error);
    }
  };

  public get: IHTTPProvider['get'] = async (path, config) => {
    try {
      const response = await Http.instance.get(path, config);
      return response.data;
    } catch (error) {
      throw new RequestError(error);
    }
  };

  public patch: IHTTPProvider['patch'] = async (path, body, config) => {
    try {
      const response = await Http.instance.patch(path, body, config);
      return response.data;
    } catch (error) {
      throw new RequestError(error);
    }
  };

  public post: IHTTPProvider['post'] = async (path, body, config) => {
    try {
      const response = await Http.instance.post(path, body, config);
      return response.data;
    } catch (error) {
      throw new RequestError(error);
    }
  };

  public put: IHTTPProvider['put'] = async (path, body, config) => {
    try {
      const response = await Http.instance.put(path, body, config);
      return response.data;
    } catch (error) {
      throw new RequestError(error);
    }
  };
}
