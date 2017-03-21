import unittest
import list_manipulator

class TestListMethods(unittest.TestCase):

    def test_first_last6(self):
      self.assertEqual(list_manipulator.first_last6([1, 3, 6]), True)

if __name__ == '__main__':
    unittest.main()