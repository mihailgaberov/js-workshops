def first_last6(nums):
  return nums[0] == 6 or nums[len(nums)-1] == 6

def same_first_last(nums):
  return len(nums) >= 1 and nums[0] == nums[len(nums) - 1]

def common_end(a, b):
  return a[0] == b[0] or a[len(a) - 1] == b[len(b) - 1]

def sum3(nums):
  return sum(nums)

def rotate_left3(nums):
  return nums[1:] + nums[:1]

def reverse3(nums):
  return nums[::-1]

def has23(nums):
  return 2 in nums or 3 in nums

def sum2(nums):
  if len(nums) <= 1:
    return sum(nums)

  return nums[0] + nums[1]
